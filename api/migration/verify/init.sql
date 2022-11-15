-- Verify travel:init on pg

BEGIN;

SELECT "id", "username", "email", "password", "name", "cover_pic", "profile_pic", "city", "website", "created_at", "updated_at" FROM "users" WHERE false;

SELECT "id", "description", "img", "user_id", "created_at", "updated_at" FROM "posts" WHERE false;

SELECT "id", "description", "user_id", "post_id", "created_at", "updated_at" FROM "comments" WHERE false;

SELECT "id", "img", "user_id", "created_at", "updated_at" FROM "stories" WHERE false;

SELECT "id", "follower_user_id", "followed_user_id", "created_at", "updated_at" FROM "relationships" WHERE false;

SELECT "id", "user_id", "post_id", "created_at", "updated_at" FROM "likes" WHERE false;

ROLLBACK;


"users", "posts", "comments", "stories", "relationships", "likes"