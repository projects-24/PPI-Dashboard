"use client"
import React, { useEffect, useState } from 'react'
import Section from 'funuicss/ui/specials/Section'
import Text from 'funuicss/ui/text/Text'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import  FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import { PiPaperPlaneRight , PiKey, PiCheck } from 'react-icons/pi';
import IconicInput from 'funuicss/ui/input/Iconic'
import {FunGet} from "funuicss/js/Fun"
import Alert from 'funuicss/ui/alert/Alert'
import { SaveUser } from '@/functions/Auth'

export default function Home() {

    const [error_message, seterror_message] = useState("")
    useEffect(() => {
      setTimeout(() => {
        seterror_message("")
      }, 4000);
    }, [error_message])
    
    const Login = () => {
        let email , password 
        email = FunGet.val("#email")
        password = FunGet.val("#password")
        if(email && password){

            if(email === "admin@gmail.com" && password === "12345"){
                SaveUser({"email" : "admin@gmail.com"})
                .then(() => {
                    window.location.assign("/dashboard")
                })
            }else{
                seterror_message("Invalid Credentials")
            }

        }else{
            seterror_message("Enter Email && Password")
        }
    }
  return (
    <FullCenteredPage>
        {
            error_message && 
            <Alert message={error_message} standard fixed="top-right" type="warning" card />
        }
    <div className='width-300-max fit'>
    <div className="margin-bottom-40">
    <Text
       text='Welcome'
       heading='h2'
       block
       />
       <Text
       text='Sign in to continue!'
       block
       />
    </div>
    <Section gap={1.5}>
       <Text text="Email" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
    <IconicInput 
       leftIcon={ <PiPaperPlaneRight />}
       input={<Input id="email" type="email" fullWidth bordered />}
        />
    </Section>
    <Section gap={1}>
       <Text text="Password" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
    <IconicInput 
       leftIcon={  <PiKey />}
       input={<Input id="password" type="password" fullWidth bordered />}
        />
    </Section>
    
         <div className="section">
           <Button
           text={"Let's go"}
           raised
           fullWidth
           bg='primary'
           bold
           onClick={Login}
           />
    </div>
    
       </div>
    </FullCenteredPage>
  )
}

