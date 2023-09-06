export default function validation(data){
    const error ={}

    const emailPattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordPattern= /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g;

    if(data.fullname === ""){
        error.fullname="* Name is Required!"
    }

    if(data.email === ""){
        error.email ="* Email is Required"
    }
    else if(!emailPattern.test(data.email)){
        error.email="* Email did not match"
    }



    if(data.password === ""){
        error.password = "* Password is Required"
    }
    else if(!passwordPattern.test(data.password)){
        error.password="* Password not valid"
    }
    

    if(data.confirmpassword === ""){
        error.confirmpassword="* Confirm password is Required"
    }
    else if(data.password !== data.confirmpassword){
        error.confirmpassword ="* Confirm password did'nt match"
    }

    return error
}