-- CreateTable
CREATE TABLE "Contribution" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount_afp" DOUBLE PRECISION NOT NULL,
    "amount_isapre" DOUBLE PRECISION NOT NULL,
    "amount_seguro" DOUBLE PRECISION NOT NULL,
    "amount_total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);
