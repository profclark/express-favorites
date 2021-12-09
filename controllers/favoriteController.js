const Favorite = require("../models/favorite");

exports.favorites_list = function (req, res, next) {
  Favorite.find().exec(function (err, favorites) {
    if (err) {
      return next(err);
    }

    const favObj = favorites.reduce((result, fav) => {
      const { _id, bookId, __v, ...book } = fav.toObject();
      return {
        ...result,
        [_id]: {
          book: { id: bookId, ...book },
        },
      };
    }, {});

    res.status(200).json(favObj);
  });
};

exports.favorite_create = function (req, res, next) {
  const book = req.body.book;

  const favorite = new Favorite({
    bookId: book.id,
    title: book.title,
    authors: book.authors,
    publishedDate: new Date(book.publishedDate),
    thumbnail: book.thumbnail,
    categories: book.categories,
    description: book.description,
    readLink: book.readLink,
    ratings: book.rating,
  });

  favorite.save(function (err) {
    if (err) {
      return next(err);
    }

    res.status(201).json({ name: favorite._id });
  });
};

exports.favorite_delete = function (req, res, next) {
  Favorite.findByIdAndDelete(req.params.id).exec(function (err, favorite) {
    if (err) {
      return next(err);
    }

    if (favorite == null) {
      const error = new Error("Favorite not found");
      error.status = 404;
      return next(err);
    }

    res.status(204).json();
  });
};
