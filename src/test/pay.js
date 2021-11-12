import React, { useEffect, useState } from 'react'
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios';

const key = "pk_test_51IwRCWSI6Fv9GtSrXP3ikFUqssbQt7W40SZ4SG62QadviCPC6EghVW2PVkvJ6U1DyquLLfetrWywqaAepsQwXnVM00a5omelta"
function Pay() {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async () => {
            try{
                const res = await axios({
                    method: 'POST',
                    url: 'http://localhost:4000/api/checkout/payment',
                    data: {
                        tokenId: stripeToken.id,
                        amount:2000
                    }
                })
                // const data = await res.json()
                console.log(res, 'data')
            }
            catch(err){
                console.log(err)
            }
        }

        if(stripeToken) makeRequest()
    },[stripeToken])
    return (
        <div>
            <StripeCheckOut
                name="kathir shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description="your amount is $20"
                amount={2000}
                token={onToken}
                stripeKey={key}
            >
                <button>
                    Pay
                </button>
            </StripeCheckOut>
        </div>
    )
}

export default Pay
