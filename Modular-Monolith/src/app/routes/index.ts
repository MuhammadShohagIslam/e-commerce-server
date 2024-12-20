import express, { Router } from 'express';
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
import { BlogRoutes } from '../modules/blogs/blog/blog.route';
import { CommentRoutes } from '../modules/blogs/comment/comment.route';
import { CartRoutes } from '../modules/cart/cart.route';
import { StripeRoutes } from '../modules/stripe/stripe.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { OTPRoutes } from '../modules/otp/otp.route';
import { DashboardRoutes } from '../modules/dashboard/dashboard.route';

const router: Router = express.Router();

const moduleRoutes = [
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/otp',
    route: OTPRoutes,
  },
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
    path: '/carts',
    route: CartRoutes,
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
    path: '/comments',
    route: CommentRoutes,
  },
  {
    path: '/comments',
    route: CommentRoutes,
  },
  {
    path: '/advertise-banners',
    route: AdvertiseBannerRoutes,
  },
  {
    path: '/dashboards',
    route: DashboardRoutes,
  },
  {
    path: '/stripes',
    route: StripeRoutes,
  },
];

moduleRoutes.forEach(mr => router.use(mr.path, mr.route));

export default router;
