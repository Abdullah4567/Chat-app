import client from '../axios/client'
export const SignUp = async (obj) => {
    const formData = new FormData();
    formData.append('name', obj.name);
    formData.append('email', obj.email);
    formData.append('password', obj.password);
    formData.append('picture', obj.picture);
    return await client.post('user/createuser', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then((res) => {
        // console.log("I am in Then")
        // console.log(res.data)
        return res.data
    }).catch((err) => {
        // console.log(err.response.data)
        return err.response.data
    })

}
export const Login = async (obj) => {
    return await client.post('user/login', {
        email: obj.email,
        password: obj.password
    }).then((res) => {
        return res.data
    }).catch((err) => {
        // console.log(err.response.data)
        return err.response.data
    })

}