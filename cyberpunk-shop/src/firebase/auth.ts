import React, { FC, useEffect, useRef, ReactElement } from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';

const Auth: FC<ReactElement<any, any> | null> = () => {
  //   const unsubscribeFromAuthRef = useRef(() => {});
  //   useEffect(() => {
  //     unsubscribeFromAuthRef.current = auth.onAuthStateChanged(
  //       async userAuth => {
  //         if (userAuth) {
  //           const userRef = await createUserProfileDocument(userAuth);

  //           userRef?.onSnapshot((snapShot) => {
  //             console.log('Auth: snapshot: ', snapShot);
  //             setCurrentUser({
  //               id: snapShot.id,
  //               currentUser: snapShot.data(),
  //             });
  //           });
  //         }
  //         setCurrentUser(userAuth);
  //       };
  //     );
  //     return () => {
  //       unsubscribeFromAuthRef?.current();
  //     };
  //   }, []);
  return null;
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: UserReducerType) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Auth);
