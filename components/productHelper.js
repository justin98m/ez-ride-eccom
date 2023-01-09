
function sortByPrice(isAscending,productList){
  let productListCopy = productList.map(prod => prod)
  if(isAscending){
    productListCopy.sort((productA,productB) =>{
      return productA.price - productB.price;
    });
  } else if(!isAscending){
    productListCopy.sort((productA,productB) =>{
      return productB.price - productA.price
    });
  }
  return productListCopy;
}
function BikesClickResponse(filter){
  //If bikes is true and accessories isnt
  if(filter.bikes && !filter.accessories){
    alert("Cannot remove bikes and Accessories");
    return filter;
  } else if(filter.bikes && filter.accessories){
      let filteredProductList = filter.productList.filter((product) =>{
          //only return products that arent bikes
          return !product.isBike;
      });
    return {
        isAscending : filter.isAscending,
        productListReference : filter.productListReference,
        productList : filteredProductList,
        bikes :false,
        accessories: filter.accessories,
      }
  }    //add bikes back to page along side accessories
  else if(!filter.bikes && filter.accessories){
    let filteredProductList = filter.productListReference.map((product) => {
      return product;
    });
    //resort list based on current isAscending status
    filteredProductList = sortByPrice(filter.isAscending,filteredProductList)
    return {
      isAscending : filter.isAscending,
      productListReference : filter.productListReference,
      productList : filteredProductList,
      bikes :true,
      accessories: filter.accessories,
    }
  }
}
function lowToHighResponse(filter){
  if(!filter.isAscending){
    let filteredProductList = sortByPrice(true,filter.productList);
    return {
      isAscending : true,
      productList : filteredProductList,
      bikes: filter.bikes,
      accessories: filter.accessories,
      productListReference : filter.productListReference
    };
  }
  //do not change the state
  return filter
}
function highToLowResponse(filter){
  if(filter.isAscending){
    console.log('High TO Low');
    let filteredProductList = sortByPrice(false,filter.productList);
    //Return object wit update list and sort order status
    return {
      isAscending : false,
      productList : filteredProductList,
      bikes: filter.bikes,
      accessories: filter.accessories,
      productListReference : filter.productListReference
    }
  }
  //do not change the state
  return filter;
}
function accessoriesClickResponse(filter){
  //If bikes is true and accessories isnt
  if(!filter.bikes && filter.accessories){
    alert("Cannot remove bikes and Accessories");
    return filter;
  } else if(filter.bikes && filter.accessories){
      let filteredProductList = filter.productList.filter((product) =>{
          //only return products that arent accessories
          return product.isBike;
      });
    return {
        isAscending : filter.isAscending,
        productListReference : filter.productListReference,
        productList : filteredProductList,
        bikes : filter.bikes,
        accessories: false,
      }
  }    //add accessories back to page along side accessories
  else if(filter.bikes && !filter.accessories){
    let filteredProductList = filter.productListReference.map((product) => {
      return product;
    });
    //resort list based on current isAscending status
    filteredProductList = sortByPrice(filter.isAscending,filteredProductList)
    return {
      isAscending : filter.isAscending,
      productListReference : filter.productListReference,
      productList : filteredProductList,
      bikes :filter.bikes,
      accessories: true,
    }
  }
}
function productReducer(filter, action){
  switch (action.type){
    case 'lowToHigh' : {
      return lowToHighResponse(filter);
    }
    case 'HighToLow' : {
      return highToLowResponse(filter);
    }
    case 'BikesClick' : {
      return BikesClickResponse(filter);
      }
    case  'AccessoriesClick' : {
      return accessoriesClickResponse(filter);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
module.exports = {
  productReducer,
  sortByPrice
}
