interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const DistrcitData: Option[] = [
  {
    value: "경기",
    label: "경기",
    children: [
      {
        value: "광명시",
        label: "광명시",
      },
      {
        value: "구리시",
        label: "구리시",
      },
      {
        value: "군포시",
        label: "군포시",
      },
      {
        value: "부천시",
        label: "부천시",
      },
      {
        value: "안성시",
        label: "안성시",
      },
      {
        value: "여주시",
        label: "여주시",
      },
      {
        value: "오산시",
        label: "오산시",
      },
      {
        value: "연천군",
        label: "연천군",
      },
      {
        value: "성남시",
        label: "성남시",
      },
      {
        value: "포천시",
        label: "포천시",
      },
      {
        value: "화성시",
        label: "화성시",
      },
      {
        value: "용인시",
        label: "용인시",
      },
      {
        value: "의왕시",
        label: "의왕시",
      },
      {
        value: "여주군",
        label: "여주군",
      },
      {
        value: "광주시",
        label: "광주시",
      },
      {
        value: "김포시",
        label: "김포시",
      },
      {
        value: "가평군",
        label: "가평군",
      },
      {
        value: "의정부시",
        label: "의정부시",
      },
      {
        value: "시흥시",
        label: "시흥시",
      },
      {
        value: "수원시",
        label: "수원시",
      },
      {
        value: "남양주시",
        label: "남양주시",
      },
      {
        value: "하남시",
        label: "하남시",
      },
      {
        value: "양평군",
        label: "양평군",
      },
      {
        value: "동두천시",
        label: "동두천시",
      },
      {
        value: "고양시",
        label: "고양시",
      },
      {
        value: "안양시",
        label: "안양시",
      },
      {
        value: "과천시",
        label: "과천시",
      },
      {
        value: "안산시",
        label: "안산시",
      },
      {
        value: "평택시",
        label: "평택시",
      },
      {
        value: "파주시",
        label: "파주시",
      },
      {
        value: "양주시",
        label: "양주시",
      },
      {
        value: "이천시",
        label: "이천시",
      },
    ],
  },
  {
    value: "대구",
    label: "대구",
    children: [
      {
        value: "달성군",
        label: "달성군",
      },
      {
        value: "동구",
        label: "동구",
      },
      {
        value: "남구",
        label: "남구",
      },
      {
        value: "북구",
        label: "북구",
      },
      {
        value: "서구",
        label: "서구",
      },
      {
        value: "중구",
        label: "중구",
      },
      {
        value: "달서구",
        label: "달서구",
      },
      {
        value: "수성구",
        label: "수성구",
      },
    ],
  },
  {
    value: "대전",
    label: "대전",
    children: [
      {
        value: "유성구",
        label: "유성구",
      },
      {
        value: "중구",
        label: "중구",
      },
      {
        value: "대덕구",
        label: "대덕구",
      },
      {
        value: "동구",
        label: "동구",
      },
      {
        value: "서구",
        label: "서구",
      },
    ],
  },
  {
    value: "부산",
    label: "부산",
    children: [
      {
        value: "서구",
        label: "서구",
      },
      {
        value: "사상구",
        label: "사상구",
      },
      {
        value: "금정구",
        label: "금정구",
      },
      {
        value: "수영구",
        label: "수영구",
      },
      {
        value: "동래구",
        label: "동래구",
      },
      {
        value: "연제구",
        label: "연제구",
      },
      {
        value: "해운대구",
        label: "해운대구",
      },
      {
        value: "기장군",
        label: "기장군",
      },
      {
        value: "남구",
        label: "남구",
      },
      {
        value: "동구",
        label: "동구",
      },
      {
        value: "강서구",
        label: "강서구",
      },
      {
        value: "북구",
        label: "북구",
      },
      {
        value: "사하구",
        label: "사하구",
      },
      {
        value: "중구",
        label: "중구",
      },
      {
        value: "영도구",
        label: "영도구",
      },
      {
        value: "부산진구",
        label: "부산진구",
      },
    ],
  },
  {
    value: "서울",
    label: "서울",
    children: [
      {
        value: "강동구",
        label: "강동구",
      },
      {
        value: "광진구",
        label: "광진구",
      },
      {
        value: "영등포구",
        label: "영등포구",
      },
      {
        value: "강남구",
        label: "강남구",
      },
      {
        value: "성동구",
        label: "성동구",
      },
      {
        value: "노원구",
        label: "노원구",
      },
      {
        value: "동대문구",
        label: "동대문구",
      },
      {
        value: "강북구",
        label: "강북구",
      },
      {
        value: "도봉구",
        label: "도봉구",
      },
      {
        value: "중구",
        label: "중구",
      },
      {
        value: "종로구",
        label: "종로구",
      },
      {
        value: "마포구",
        label: "마포구",
      },
      {
        value: "서초구",
        label: "서초구",
      },
      {
        value: "동작구",
        label: "동작구",
      },
      {
        value: "강서구",
        label: "강서구",
      },
      {
        value: "성북구",
        label: "성북구",
      },
      {
        value: "송파구",
        label: "송파구",
      },
      {
        value: "금천구",
        label: "금천구",
      },
      {
        value: "양천구",
        label: "양천구",
      },
      {
        value: "서대문구",
        label: "서대문구",
      },
      {
        value: "관악구",
        label: "관악구",
      },
      {
        value: "중랑구",
        label: "중랑구",
      },
      {
        value: "구로구",
        label: "구로구",
      },
      {
        value: "은평구",
        label: "은평구",
      },
      {
        value: "용산구",
        label: "용산구",
      },
    ],
  },
  {
    value: "울산",
    label: "울산",
    children: [
      {
        value: "남구",
        label: "남구",
      },
      {
        value: "동구",
        label: "동구",
      },
      {
        value: "중구",
        label: "중구",
      },
      {
        value: "울주군",
        label: "울주군",
      },
      {
        value: "북구",
        label: "북구",
      },
    ],
  },
  {
    value: "인천",
    label: "인천",
    children: [
      {
        value: "미추홀구",
        label: "미추홀구",
      },
      {
        value: "강화군",
        label: "강화군",
      },
      {
        value: "옹진군",
        label: "옹진군",
      },
      {
        value: "남구",
        label: "남구",
      },
      {
        value: "부평구",
        label: "부평구",
      },
      {
        value: "서구",
        label: "서구",
      },
      {
        value: "동구",
        label: "동구",
      },
      {
        value: "연수구",
        label: "연수구",
      },
      {
        value: "중구",
        label: "중구",
      },
      {
        value: "계양구",
        label: "계양구",
      },
      {
        value: "남동구",
        label: "남동구",
      },
    ],
  },
];

export default DistrcitData;
