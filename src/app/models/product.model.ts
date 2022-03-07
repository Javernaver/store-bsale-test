export interface Product {

    _id: number;        // Identificador único del producto 
    name: string;       // Nombre del producto 
    url_image: string;  // URL de la imagen asociada al producto
    price: number;      // Precio de venta del producto
    discount: number;   // Porcentaje de descuento del producto
    category: number;   // Identificador de la categoría

}
