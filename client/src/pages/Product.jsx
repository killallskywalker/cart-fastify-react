import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom" 
import { createOrder } from '../services/api/orders/index';
import { getAdvertisements } from '../services/api/advertisements/index';
import Card from '../components/Card';
import Cart from '../components/Cart';
import { calculate } from 'killallskywalker-mycart';
import { UserContext } from './../context/UserContext';

const Product = () => {
    const { userId } = useParams();
    const { users } = useContext(UserContext);
    const [ advertisements , setAdvertisements ] = useState([]);
    const [ standardAd , setStandardAd ] = useState(0);
    const [ featureAd , setFeatureAd ] = useState(0);
    const [ premiumAd , setPremiumAd ] = useState(0);

    const user = users.find((user)=> {
        return user.id === Number(userId)
    });
    
    const addToCart = (advertisement,add) => {
        switch (advertisement){
            case "Standard Ad":
                (add) ? setStandardAd(standardAd + 1) : setStandardAd(standardAd - 1);
                break
            case "Featured Ad":
                (add) ? setFeatureAd(featureAd + 1) : setFeatureAd(featureAd - 1);
                break
            case "Premium Ad":
                (add) ? setPremiumAd(premiumAd + 1) : setPremiumAd(premiumAd - 1);
                break
            default:
        }        
    }

    const retrieveTotalCart = (advertisement) => {
        let totalOfCart = 0;
        switch (advertisement){
            case "Standard Ad":
                totalOfCart = standardAd;
                break
            case "Featured Ad":
                totalOfCart = featureAd
                break
            case "Premium Ad":
                totalOfCart = premiumAd
                break
            default:
        }     
        
        return totalOfCart;
    }

    const totalPrice = calculate(advertisements,{
        standardAd:standardAd,
        featureAd:featureAd,
        premiumAd:premiumAd
    });

    const totalItem = standardAd + featureAd + premiumAd;
    
    const submitOrder = async () => {
        const data = {
            userId:userId,
            standardAd:standardAd,
            featureAd:featureAd,
            premiumAd:premiumAd,
            totalPrice:totalPrice
        }
        try{
            const response = await createOrder(data);
            alert(response.message)
        }catch(e){
            alert(e)
        }
    }

    useEffect( () => {
        const fetch = async () => {
            try{
                const response = await getAdvertisements(userId);
                setAdvertisements(response.data)
            }catch(e){
                alert(e)
            }
        };

        fetch();
    },[userId]);

    return (
        <div className="bg-gray-900 h-full py-12 sm:h-screen relative sm:py-20">
            <div className="absolute top-0 bg-gradient-to-b from-black via-bkack to-gray-900 w-full p-6">
            </div>
            <div className="flex justify-center">
                <h1 className="text-white text-lg font-bold sm:text-white sm:text-6xl sm:font-bold sm:my-10">{(user) ? user.name:null}</h1>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
                    {advertisements.map(advertisement => 
                        <Card title={advertisement.name}  price={advertisement.price} promo={advertisement.userPromo} addCart={() => addToCart(advertisement.name,true)}/>
                    )}
                </div>   
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                    <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                    {advertisements.map(advertisement => {
                        let totalCart = retrieveTotalCart(advertisement.name)
                        return <Cart title={advertisement.name} total={totalCart} addCart={() => addToCart(advertisement.name,true)} deleteCart={() => addToCart(advertisement.name,false)}/>
                    }
                    )}
                    <div className="flex justify-between mx-20 items-center text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Item</p>
                            <p className="text-3xl">{totalItem}</p>
                        </div>
                        <div className="text-xl font-semibold">
                            <p>Total Price</p>
                            <p className="text-3xl">{Math.floor(totalPrice*100)/100}</p>
                        </div>
                    </div>
                    <div className="flex justify-center mx-20 items-center text-center">
                    <button disabled={(totalPrice===0)} class={`${(totalPrice===0) ? "bg-gray-500  hover:bg-green-700" : "bg-green-500"} hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none`} onClick={() => submitOrder()}>
                        Pay Now
                    </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
