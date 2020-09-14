import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from 'src/product/product.module';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceService } from './service/invoice.service';
import { InvoiceSchema } from './model/invoice.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Invoice', schema: InvoiceSchema }]),
    ProductModule
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController]
})
export class InvoiceModule {}
