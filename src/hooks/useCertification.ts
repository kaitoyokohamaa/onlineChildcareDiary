import {useState} from 'react';
import {useRouter} from 'next/router';
import firebase from '@/lib/firebase';
import {userRef, invitedUserRef, teacherRef} from '@/lib/firestore';

export const UseCertification = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const signupHandler = () => {
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const users = {
          uid: [res.user?.uid],
          address: res.user.email,
          cellphoneNumber: null,
          selfIntroduction: null,
          name: null,
          dispayImage: null,
          birthday: null,
          practicalTraining: null,
          sex: null,
        };
        userRef().add(users);
      })
      .then(() => {
        router.push(`/user/welcome`);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const signinHandler = () => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push(`/user/welcome`);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  return {
    signupHandler,
    signinHandler,
    setEmail,
    setPassword,
    email,
    password,
    isLoading,
  } as const;
};

export const UseInviteCertification = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const signupHandler = async () => {
    setIsLoading(true);
    const signUp = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const teacherUid = signUp.user.uid;
    const userInfo = (await userRef().doc(id).get()).data();
    const studentUid = await userInfo.uid[0];
    const newUidArrary = [studentUid, teacherUid];
    await userRef().doc(id).update({uid: newUidArrary});
    const users = {
      uid: teacherUid,
      name: null,
      dispayImage: null,
      chatKey: [id],
    };

    teacherRef().add(users);

    router.push(`/user/signup/invite/register/${id}`);
  };

  return {
    signupHandler,
    setEmail,
    setPassword,
    email,
    password,
    isLoading,
  } as const;
};

export const UseTeacherCertification = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const signinHandler = () => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push(`/teacher/welcome`);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return {
    signinHandler,
    setEmail,
    setPassword,
    email,
    password,
    isLoading,
  } as const;
};
