import styled from "@emotion/styled";

// 메뉴 - 작가 

export const Wrapper = styled.div`
    width: 1200px;
    height: 1700px;
    margin: auto;
    padding: 40px;   

`
export const ArtistBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 20px;
    margin: auto;
`
export const ArtistTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin-bottom: 20px;
`
export const ArtistSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`

export const ArtistWrapper = styled.div`
    width: 1200px;
    height: 800px;
`

// 작가 검색 
export const ArtistSearch = styled.div`
    width: 240px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 55px 20px auto;
`
export const SearchTitle = styled.div`
    width: 200px;
    color: rgba(0,0,0,0.8);
`
export const SearchInput = styled.input`
    height: 20px;
    border: 2px solid navy;
    border-radius: 10px; 
`
export const Icon = styled.div`
    padding: 7px;
    color: navy;
`

// 프로필 칼럼
export const ArtistColumn = styled.div`
    width: 1100px;
    height: 840px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    margin: auto;
    padding: 30px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileSection = styled.div`
    width: 1000px;
    height: 185px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Line = styled.div`
    width: 1000px;
    margin: 20px 0;
    border-bottom: 1px dotted rgba(0,0,0,0.2);
`
export const ProfileImage = styled.div`
    width: 165px;
    height: 165px;
    background-image: url('/images/imageiu.jpg');
    background-position: center;
    background-size: cover;
    border-radius: 80px;
`

export const Profile = styled.div`
    width: 140px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Name = styled.div`
    font-size: 19px;
    font-weight: 500;
`
export const Email = styled.div`
    font-size: 16px;
    margin-bottom: 8px;
    color: rgba(0,0,0,0.7);
`

export const Sns = styled.div`
    width: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: rgba(0,0,0,0.8);
`
export const Image = styled.div`
    width: 23px;
    height: 23px;
    background-image: url('/images/instagram.png');
    background-position: center;
    background-size: cover;
`

export const ProfileInfo = styled.div`
    width: 655px;
    height: 155px;
`

export const Following = styled.span`
    font-weight: 600;
    color: rgba(0,0,0,0.5);
    margin-right: 15px;
    span{
        color: rgba(0,0,0,0.7);
    }
`

export const Sales = styled.span`
    font-weight: 600;
    color: rgba(0,0,0,0.5);
    
    span{
        color: rgba(0,0,0,0.7);
    }
`
    
export const Intro = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: rgba(0,0,0,0.8);
    padding: 10px 0;
`
export const History = styled.div`
    padding: 10px;
`
export const HistoryTitleLeft = styled.div`
    font-size: 19px;
    font-weight: 600;
    color: #F6C367;
    margin-bottom: 10px;
`
export const HistoryTitleRight = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: #F6C367;
    margin-bottom: 10px;
`
export const Record = styled.div`
    width: 400px;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0,0,0,0.7);
`
export const ProfileBtn = styled.button`
    width: 135px;
    height: 45px;
    font-size: 15px;
    font-weight: 600;
    color: rgba(0,0,0,0.8);
    margin: auto 0 5px;
    border: none;
    border-radius: 10px;
    background-color: #FF7932;
    color: white;
    cursor: pointer;
`

// 상세보기 클릭시 

export const Work = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 45px 0;
`

export const WorkImage = styled.div`
    width: 220px;
    height: 270px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    background-image: url('/images/art07.jpeg');
    background-position: center;
    background-size: cover;
`

export const WorkTitle = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const WorkBtn = styled.button`
    width: 135px;
    height: 45px;
    font-size: 15px;
    font-weight: 600;
    color: rgba(0,0,0,0.8);
    margin: auto 50px 5px  auto; 
    border: none;
    border-radius: 10px;
    background-color: #FF7932;
    color: white;
    
    cursor: pointer;
`

