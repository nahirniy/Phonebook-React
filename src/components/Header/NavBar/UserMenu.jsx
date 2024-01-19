import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../../../redux/authSlice';
import { useLogoutMutation } from 'services/auth-api';
import Loader from 'common/components/Feedbacks/Loader';

import { CiLogout } from 'react-icons/ci';

const UserMenu = () => {
  const { name } = useSelector(state => state.userData.auth.user);
  const [logout, { isLoading, isError, isSuccess }] = useLogoutMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSuccess) return;

    dispatch(setToken(null));
    dispatch(setUser(null));

    toast.success('You successfully logout!');
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (!isError) return;

    toast.error("You couldn't logout... Please try again!");
  }, [isError]);

  return (
    <div className="justify-center  mt-[25px] md:ml-12 flex md:justify-normal md:mt-[0]  items-center gap-4">
      <p className="text-[16px] flex gap-2 justify-between items-center border rounded-lg p-2">
        <b>User:</b> {name}
      </p>
      <button
        onClick={logout}
        className="w-[45px] flex items-center justify-center h-[45px]   rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
      >
        {isLoading ? (
          <Loader size="35" />
        ) : (
          <CiLogout style={{ width: '25px', height: '25px' }} />
        )}
      </button>
    </div>
  );
};

export default UserMenu;
