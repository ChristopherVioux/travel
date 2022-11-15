-- Revert travel:init from pg

BEGIN;

DROP TABLE "users", "posts", "comments", "stories", "relationships", "likes";

COMMIT;
