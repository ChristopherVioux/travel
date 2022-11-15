-- Deploy travel:init to pg

BEGIN;

CREATE TABLE "users" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" VARCHAR(45) NOT NULL,
    "email" email NOT NULL UNIQUE,
    "password" VARCHAR(200) NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "cover_pic" VARCHAR(200) ,
    "profile_pic" VARCHAR(200),
    "city" VARCHAR(45),
    "website" VARCHAR(45)
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "posts" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" VARCHAR(200),
    "img" VARCHAR(200),
    "user_id" INT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "comments" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" VARCHAR(200),
    "user_id" INT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "post_id" INT NOT NULL REFERENCES "posts"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "stories" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "img" VARCHAR(200) NOT NULL,
    "user_id" INT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "relationships" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "follower_user_id" INT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "followed_user_id" INT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "likes" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "post_id" INT NOT NULL REFERENCES "posts"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
