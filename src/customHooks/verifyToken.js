import Cookies from 'js-cookie';

export default function verifyToken() {
  const validToken = Cookies.get('adminToken');
  return !!validToken;
}
