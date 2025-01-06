
import { useFormUser } from '../hooks/useFormUser';
import { Registercomplete, RegisterStart } from './Register';


export const UserForm = () => {
    
    const  { register, handleSubmit, handletoggle, onSubmit,
             checkform, errors,isDisabled,isGifAvailable,
             img,sendsuccess,gifUrl
            } = useFormUser();
  
    return (
        <>
       
            {  
                !sendsuccess 
                ?   
                    <div className="flex-col rounded-lg p-10 ">
                        <RegisterStart/>
                        <form className=' bg-slate-100  text-center mt-2 p-5 px-7 rounded-lg '  onSubmit={handleSubmit(onSubmit)} >     
                            <div className='overflowcustom p-4 h-[28rem] lg:h-[45rem] xl:h-[35rem]'>
                            
                                    <div className='formlabel'>E-mail : </div>
                                    <input type='email' {...register('email')} className='forminput ' />
                                    {errors.email?.message && <p className='formerror'>{errors.email?.message}</p>}
                                
                                    <div className='formlabel'>Firstname : </div>
                                    <input type='text' {...register('firstname')} className='forminput' />
                                    {errors.firstname?.message && <p className='formerror'>{errors.firstname?.message}</p>}

                                    <div className='formlabel'>Lastname : </div>
                                    <input type='text' {...register('lastname')} className='forminput' />
                                    {errors.lastname?.message && <p className='formerror'>{errors.lastname?.message}</p>}

                                    <div className='formlabel'>Password : </div>
                                    <input type='password' {...register('password')} className='forminput' />
                                    {errors.password?.message && <p className='formerror'>{errors.password?.message}</p>}

                                    <div className='formlabel'>Confirm Password: </div>
                                    <input type='password' {...register('confrimpassword')} className='forminput' />
                                    {errors.confrimpassword?.message && <p className='formerror'>{errors.confrimpassword?.message}</p>}
                                    
                                    <div className="formlabel">Phone : </div>
                                    <input type='text' {...register('phone')} className="forminput" />
                                    {errors.phone?.message && <p className="formerror">{errors.phone?.message}</p>}
                                    
                                    <div className="formlabel">Idcard : </div>
                                    <input type='text' maxLength={13} {...register('idcard')} className="forminput " />
                                    {errors.idcard?.message && <p className="formerror">{errors.idcard?.message}</p>}

                                    <div className="formlabel">Select Birth Date:</div>
                                        <input type="date" id="birthDate" {...register('birthDate')} className="forminput cursor-pointer" />
                                        {errors.birthDate?.message && <p className="formerror">{errors.birthDate?.message}</p>}

                                    <div className='mt-6 flex gap-3'>     
                                        <input type='checkbox' checked={checkform} onClick={handletoggle} className='bg-violet-200'/>
                                        <div className=' text-[1rem] font-bold  text-start '> i agree to flow the terms of use</div>
                                    </div> 
                        

                                    <br/>
                    
                                    <button type="submit" className={`
                                    text-white font-bold text-xl 
                                    w-[18rem] h-[3rem] rounded-full mt-5 
                                    ${checkform ? 'bg-blue-900' : 'bg-blue-300'} 
                                    ${checkform ? 'cursor-pointer' : 'cursor-not-allowed'}`} 
                                    disabled={isDisabled}
                                    >Continue</button>
                            </div>
                        </form> 
                    </div>
                :   <Registercomplete isGifAvailable={isGifAvailable} img={img} gifUrl={gifUrl}/>
            } 
        </>

    )
}

