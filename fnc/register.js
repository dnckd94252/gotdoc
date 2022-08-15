import axios from "axios";
import Router from "next/router";

const readFile = (file) => {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.onload = () => {
      res(reader);
    };
    reader.readAsDataURL(file);
  });
};

const registerPost = async (val) => {
  await axios.post("/api/user/register", val).then((res) => {
    const data = res.data;
    if (data === "success") {
      Router.push("/register/success");
    } else {
      return alert("아이디가 중복입니다. 다른 아이디를 입력해주세요.");
    }
  });
};

export const phoneChange = (ref) => {
  ref.current.value = ref.current.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};

export const pickPicture = async () => {
  try {
    const handle = await window.showOpenFilePicker();
    const getFile = await handle[0].getFile();
    const reader = await readFile(getFile);
    return reader.result;
  } catch (err) {
    return false;
  }
};

export const registerAction = async (profile) => {
  const input = document.getElementsByTagName("input");
  const val = {
    name: input.name.value,
    id: input.id.value,
    pw: input.pw.value,
    pwCheck: input.pwCheck.value,
    email: input.email.value,
    type: input.type.value,
    phone: input.phone.value,
    profile,
  };

  for (let i in val) {
    const item = val[i];
    if (!item || item.length <= 0) return alert("모든 값을 입력해주세요.");
  }

  const regex = {
    name: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
    id: /^[A-Za-z0-9]+$/,
    pw: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    email:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  };

  if (!regex.name.test(val.name))
    return alert("이름은 영문 및 한글로 이루어집니다.");
  if (!regex.id.test(val.id) || val.id.length < 8)
    return alert("아이디는 8자 이상 영문 , 숫자로만 이루어집니다.");
  if (!regex.pw.test(val.pw) || val.pw.length < 10)
    return alert("비밀번호는 10자 이상 영문 , 숫자 , 특수문자로 이루어집니다.");
  if (!regex.email.test(val.email))
    return alert("이메일 형식으로 작성해주세요.");
  if (val.pw !== val.pwCheck) return alert("비밀번호와 확인이 틀렸습니다.");

  return await registerPost(val);
};