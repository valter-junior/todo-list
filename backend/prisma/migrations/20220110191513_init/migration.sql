-- CreateTable
CREATE TABLE "list" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "title" VARCHAR(25) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "listid" INTEGER NOT NULL,
    "description" VARCHAR,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR NOT NULL,
    "lastname" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR(10) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "fk_user" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "fk_list" FOREIGN KEY ("listid") REFERENCES "list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
