import React, {useEffect, useState} from 'react';
import firebase from '@/lib/firebase';
import {useRouter} from 'next/router';
import {userIdRef, teacherRef} from '@/lib/firestore';
export const AuthContext = React.createContext({
  dockey: null,
  loginUser: null,
  setImage: null,
  image: null,
  setDisplayName: null,
  displayName: null,
  chatKey: null,
});
export const UseAuthContext = ({children}) => {
  const [dockey, setDocKey] = useState(null);

  const [loginUser, setLoginUser] = useState(null);
  const [displayName, setDisplayName] = useState<string>('');
  const [image, setImage] = useState<string>(null);
  const [chatKey, setChatKey] = useState<string>(null);
  const router = useRouter();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user: firebase.default.User) => {
      if (user) {
        if (
          router.asPath.includes('teacher') ||
          router.asPath.includes('for-teachers') ||
          router.asPath.includes('invite')
        ) {
          setLoginUser(user);

          teacherRef()
            .where('uid', '==', user.uid)
            .onSnapshot((res) =>
              res.forEach((item) => {
                setDisplayName(item.data().name);
                setImage(item.data().dispayImage);
                setChatKey(item.data().chatKey[0]);
              }),
            );
          teacherRef()
            .where('uid', '==', user.uid)
            .onSnapshot((res) => {
              res.forEach((item) => {
                setDocKey(item.id);
                if (router.asPath === '/signup' || router.asPath === '/login') {
                  router.push(`teacher/home`);
                }
              });
            });
        } else {
          setLoginUser(user);
          userIdRef(user.uid).onSnapshot((res) =>
            res.forEach((item) => {
              return (
                setDisplayName(item.data().name),
                setImage(item.data().dispayImage)
              );
            }),
          );
          userIdRef(user.uid).onSnapshot((res) => {
            res.forEach((item) => {
              setDocKey(item.id);
              setChatKey(item.id);
              if (
                router.asPath === '/user/signup' ||
                router.asPath === '/user/login'
              ) {
                router.push(`/user/home/${item.id}`);
              }
            });
          });
        }
      } else if (
        !router.asPath.includes('/invite') &&
        router.asPath !== '/teacher/login'
      ) {
        router.push(`/user/signup`);
      }
    });
  }, [dockey]);
  return (
    <AuthContext.Provider
      value={{
        dockey,
        loginUser,
        setImage,
        image,
        setDisplayName,
        displayName,
        chatKey,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
