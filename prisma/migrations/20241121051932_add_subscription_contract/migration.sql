-- CreateTable
CREATE TABLE "SubscriptionContracts" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "nextBillingDate" DATETIME NOT NULL,
    "interval" TEXT NOT NULL,
    "intervalCount" INTEGER NOT NULL,
    "paymentFailureCount" INTEGER NOT NULL DEFAULT 0,
    "contract" TEXT NOT NULL,
    "outOfStock" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "SubscriptionContracts_id_key" ON "SubscriptionContracts"("id");
