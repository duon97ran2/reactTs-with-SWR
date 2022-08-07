import { useNavigate } from 'react-router-dom';
import { login } from './../api/auth';
import { useSWRConfig } from 'swr';
import { AuthRequest } from './../types/Auth';
import { message } from 'antd';

const useAuth = () => {
  const { cache, mutate } = useSWRConfig();
  const navigate = useNavigate()
  const userLogin = async (data: AuthRequest) => {
    await login(data).then(res => { cache.set("user", res), navigate("/") }).catch(err => { message.error(err.response.data) })
  }
  return {
    cache, mutate, userLogin
  }
}

export default useAuth