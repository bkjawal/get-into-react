import React from 'react';

let TableRow = (props) =>{
    let product = props.product;
    let row = [];
    Object.keys(product).forEach(function(val){
        row.push(<td>{product[val]}</td>); 
    });
    return ( <tr>
               {row}
            </tr>
    );
}

let TableHeader = (props) =>{
    let products = props.products;
    let header = [];
    Object.keys(products[0]).forEach(function(val){
        header.push(<th key={val}>{val}</th>);
    });
    
    return ( <tr> 
               {header}
             </tr>
           );
}

let ProductTable = props  => {
    let products = props.products;
     let rows = [];
     products.forEach(function(p){
         rows.push(<TableRow key={p.id} product={p}></TableRow>);
     }); 
     return( <table>
                <thead>
                <TableHeader products={products}></TableHeader>
                </thead>
            <tbody>
              {rows}
            </tbody>    
        </table>
     ); 
}
        
 export default ProductTable;