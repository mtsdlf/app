import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mtsdlf:gtx550ti@stock.hojke.gcp.mongodb.net/stock?retryWrites=true&w=majority', { useNewUrlParser: true }),
    InvoiceModule, 
    ProductModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
