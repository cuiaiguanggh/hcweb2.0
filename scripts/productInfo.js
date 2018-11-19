

var thisId = getUrlParms("id");
var thisType=thisId.split("-")[0];
var modal=getProductType(thisType);

console.log(thisId);


var productInfoModal = new Vue({
  el: '#product-Info-box',
  data: {
    img: {}
  },
});

console.log(modal)
getProductInfo(modal);



function getProductInfo(product){
  if(product==null) return;
  for(var i=0;i<product.length;i++){
    if(product[i].id==thisId){
      productInfoModal.img=product[i];
      console.log(productInfoModal.img)

      $(".productImg").attr("src",product[i].url);
      $(".productInfo").html(product[i].info);
      $(".productTitle").html(product[i].title);
      if(product[i].info==''){
        $(".productImg").addClass("hidden");
      }else if(product[i].imgInfo!=null){
        
        
        
        $(".productInfoImg").removeClass("hidden");    
      }
    }
  }
}