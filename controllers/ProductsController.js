import ProdModel from "../models/ProductModel.js";
const getAll=async (req,res)=>{
    try{
        let products=await ProdModel.find();
        return res.json({"err":0,"prodata":products});
    }
    catch(err){
        return res.json({"err":1,"msg":"Something went wrong"});
    }
}
const getById=async (req,res)=>{
     try{
       let id=req.params.id;
       let proData=await ProdModel.findOne({_id:id})
       res.json({"err":0,"proddata":proData})
     }
     catch(err){
        return res.json({"err":1,"msg":"Something went wrong"})
     }
   
}
const addproduct=async (req,res)=>{
    if(req.file==undefined){
         return res.json({"err":1,"msg":"Error in file uploading"});
    }
    try{
     let ProductData=req.body;
     ProductData={...ProductData,imagePath:req.file.filename};
     let newProduct=new ProdModel(ProductData); 
     await newProduct.save();
    return res.json({"err":0,"msg":"Add product successfully"})
    }
    catch(err){
        return res.json({"err":1,"msg":"Product already added or something went wrong"});
    }
}
const deleteproduct=async (req,res)=>{
    try{
         let id=req.params.id;
         console.log(id);
         let prod= await ProdModel.deleteOne({_id:id})
         return res.json({"err":0,"msg":"Delete product"})
    }
    catch(err){
        return res.json({"err":1,"msg":"Something went wrong"})
    }
  
}
const updateproduct=async (req,res)=>{
   try{
    let id=req.params.id;
    let body=req.body;
    // let prod= ProdModel.findOneAndUpdate({_id:id,body});
    let prod=await ProdModel.updateOne({_id:id},body)
      return res.json({"err":0,"msg":"Product Update"})
   }
   catch(err){
    return res.json({"err":1,"msg":"Something went wrong"})
   }
}
export {getAll,getById,addproduct,deleteproduct,updateproduct};