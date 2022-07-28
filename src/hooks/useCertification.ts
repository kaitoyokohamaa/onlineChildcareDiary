import {useState} from 'react';
import {useRouter} from 'next/router';
import firebase from '@/lib/firebase';
import {userRef, invitedUserRef, teacherRef} from '@/lib/firestore';

export const UseCertification = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const signupHandler = () => {
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
      });
  };
  const signinHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push(`/user/welcome`);
      })
      .catch((err) => {
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
  } as const;
};

export const UseInviteCertification = (id: string) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const signupHandler = async () => {
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
  } as const;
};

export const UseTeacherCertification = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const signinHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push(`/teacher/welcome`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    signinHandler,
    setEmail,
    setPassword,
    email,
    password,
  } as const;
};
