CREATE TABLE "shortened_url" (
    "shortened_url" VARCHAR(255),
    "original_url" text,
    "description"  text,
    "disabled" bool DEFAULT FALSE,
    "created_at" TIMESTAMP,
    "created_by" int8,
    PRIMARY KEY ("shortened_url")
);