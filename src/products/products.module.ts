import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsService } from '../products/products.service'
import { ProductsController } from '../products/products.controller'
import { Product } from './schemas/product.schema'
import { ProductSchema } from 'src/products/schemas/product.schema'

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    imports: [
 
    MongooseModule.forFeature([
            {name: Product.name, schema: ProductSchema}
        ])
    ]
})
export class ProductsModule {
    
}
