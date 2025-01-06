import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { UserSchema, Userschema } from '../schemas/userSchema';
import { useReward } from 'react-rewards';

export const useFormUser = () => {
    
    // zod
    const { register, handleSubmit, formState: { errors } , reset } = useForm<UserSchema>({resolver: zodResolver(Userschema)});
    // React-reward
    const {reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti',{
        lifetime : 400,
        spread: 200,          
        startVelocity: 30,     
        elementCount: 100,     
        decay: 0.5,   
    });
    const {reward: balloonsReward, isAnimating: isBalloonsAnimating} = useReward('balloonsReward', 'balloons' , {  
        lifetime : 600,
        spread: 70,     
        startVelocity : 3 ,
        elementCount : 30 ,
        elementSize : 30 ,
    });
    
    const [checkform , setCheckform] = useState(false);
    const isDisabled = isConfettiAnimating || isBalloonsAnimating || !checkform;
    const [sendsuccess , setSendsuccess] = useState(false);
    const gifUrl = "https://giphy.com/embed/UtcBRO8cxulRzkrVLc"; 
    const isGifAvailable = gifUrl && gifUrl.length > 0;
    const img = '/src/assets/ricardo_milos.jpg';

    
    const handletoggle = () => {
        setCheckform((prve) => !prve)
    }
  
    const onSubmit = (data : UserSchema) => {

        console.log('data' ,data);
        setSendsuccess(true);
        //backend here
    };
   
    useEffect(() => {
        if(sendsuccess) {
            
            if (!isConfettiAnimating && !isBalloonsAnimating) {
                confettiReward();
                balloonsReward();

                setTimeout(() => {
                    setSendsuccess(false);
                    reset();
                },9000);
            }
        }
    },[sendsuccess, isConfettiAnimating, isBalloonsAnimating, confettiReward, balloonsReward ,reset]);

    return {
        register,
        handleSubmit,
        handletoggle,
        onSubmit,
        checkform,
        errors,
        isDisabled,
        isGifAvailable,
        img,
        sendsuccess,
        gifUrl,
    };
}
