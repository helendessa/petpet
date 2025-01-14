import { Router } from 'express';
import * as pingController from '../controllers/ping';
import * as authController from '../controllers/auth';
import { verifyJWT } from '../utils/jwt';
import * as postController from '../controllers/post';
import * as userController from '../controllers/user';
import * as feedController from '../controllers/feed';
import * as searchController from '../controllers/search';

export const mainRouter = Router();

mainRouter.get('/ping', pingController.ping);
mainRouter.get('/privateping', verifyJWT, pingController.privatePing);

mainRouter.post('/auth/signup', authController.signup);
mainRouter.post('/auth/signin', authController.signin);

mainRouter.post('/post', verifyJWT, postController.addPost);
mainRouter.get('/post/:id', verifyJWT, postController.getPost);
mainRouter.get('/post/:id/answers', verifyJWT, postController.getAnswers);
mainRouter.post('/post/:id/like', verifyJWT, postController.likeToggle);

mainRouter.get('/user/:slug', verifyJWT, userController.getUser);
mainRouter.get('/user/:slug/posts', verifyJWT, userController.getUserPosts);
mainRouter.post('/user/:slug/follow', verifyJWT, userController.followToggle);
mainRouter.put('/user', verifyJWT, userController.updateUser);
// mainRouter.put('/user/avatar');
// mainRouter.put('/user/cover');

mainRouter.get('/feed', verifyJWT, feedController.getFeed);
mainRouter.get('/search', verifyJWT, searchController.searchPosts);


