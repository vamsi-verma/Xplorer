const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

//Here the below router will handle both normal review routes and specific tour review routes because of mergeParams.
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('users', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('users', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
