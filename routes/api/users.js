const express = require('express');
const router = express.Router();
const { authValidators } = require('../../models/user');
const { validateBodyWrapper, auth, uploadCloud } = require('../../middlewares/index');
const { authCtrl, ownRecipesCtrl } = require('../../controllers');
const { schemas } = require('../../models/recipe');

router.post('/register', validateBodyWrapper(authValidators.register), authCtrl.register);

router.post('/signin', validateBodyWrapper(authValidators.signin), authCtrl.signin);

// POST method for /update to ease front end life: form data works only with post by default

router.post('/update', auth, uploadCloud.single('avatar'), authCtrl.update);

router.get('/logout', auth, authCtrl.logout);

router.get('/current', auth, authCtrl.current);

router.get('/current/subscribe/:subscribedToken', authCtrl.updateSubscription);

router.post('/current/subscribe', auth, validateBodyWrapper(authValidators.subscribe), authCtrl.sendSubscriptionEmail);

router.get('/verify/:verificationToken', authCtrl.verifyEmail);

router.post('/verify', authCtrl.resendEmail);

// own-recipes
router.get('/:userId/own-recipes', auth, ownRecipesCtrl.listOwnRecipes);

router.post('/:userId/own-recipes', auth, uploadCloud.single('preview'), ownRecipesCtrl.addOwnRecipes);

router.delete('/own-recipes/:id', auth, ownRecipesCtrl.removeOwnRecipes);

// router.get("/info/:userId", auth, authCtrl.getUserInfo);
// чи потрібен??????
module.exports = router;
