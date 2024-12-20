import express from 'express';
import { CategoryRoutes } from '../modules/category/category.route';
import { SubCategoryRoutes } from '../modules/subCategory/subCategory.route';
import { SizeRoutes } from '../modules/size/size.route';
import { CouponRoutes } from '../modules/coupon/coupon.route';
import { BrandRoutes } from '../modules/brand/brand.route';
import { ColorRoutes } from '../modules/color/color.route';
import { AdvertiseBannerRoutes } from '../modules/advertiseBanner/advertiseBanner.route';
import { ProductRoutes } from '../modules/product/product.route';
import { OrderRoutes } from '../modules/order/order.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { OTPRoutes } from '../modules/otp/otp.route';
import { StripeRoutes } from '../modules/stripe/stripe.route';
import { CartRoutes } from '../modules/cart/cart.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/sub-categories',
    route: SubCategoryRoutes,
  },
  {
    path: '/coupons',
    route: CouponRoutes,
  },
  {
    path: '/sizes',
    route: SizeRoutes,
  },
  {
    path: '/brands',
    route: BrandRoutes,
  },
  {
    path: '/colors',
    route: ColorRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/carts',
    route: CartRoutes,
  },
  {
    path: '/comments',
    route: CommentRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/otp',
    route: OTPRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/advertise-banners',
    route: AdvertiseBannerRoutes,
  },
  {
    path: '/stripes',
    route: StripeRoutes,
  },
];

moduleRoutes.forEach(mr => {
  router.use(mr.path, mr.route);
});

export default router;
