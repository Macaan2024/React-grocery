// Main.js
import React from 'react';

function Main({products, onDeleteProduct }) {
  return (
    <main>
      <table border="1" cellPadding="0" cellSpacing="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td className="btn">
                <button className="btn-edit">Edit</button>
                <button className='btn-delete' onClick={() => onDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
