CREATE TABLE products ("id" SERIAL PRIMARY KEY,"productId" VARCHAR(255), "productName" VARCHAR(255),"quantity" INT,"costPrice" INT,"salePrice" INT,"created_at" TIMESTAMP,"updated_at" TIMESTAMP,"deleted_at" TIMESTAMP);



CREATE TABLE sellproducts ("id" SERIAL PRIMARY KEY,"phoneNumber" INT,"productId" INT,"productName" VARCHAR(255),"quantity" INT,"created_at" TIMESTAMP,"updated_at" TIMESTAMP,"deleted_at" TIMESTAMP);
