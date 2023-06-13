import styled from "@emotion/styled"

//관리자 정보 (회원관리)
export const Wrapper = styled.div`
    width: 1300px;
    height: 750px;
    display: flex;
    margin: 30px;
    padding: 20px;
    margin : auto;
`
export const MemberWrapper= styled.div`
    width: 100%;
    height: 620px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 40px;
`
export const MemberTitle = styled.div`
    font-size: 22px;
    padding: 26px;
    color: #1355BD;
    font-weight: bold;
`

export const MemberBtn = styled.div`
    width: 100px;
    height: 30px;
    margin: 10px 0 0 auto ;
`

export const Btn = styled.button`
    &:hover {
        background-color: white;
        color: black;
    }

    width: 90px;
    height: 100%;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: black;
    color: white;
`


// 회원관리 테이블 
export const MemberTable = styled.table`
    width: 910px;
    height: 50px;
    margin: auto;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    border-radius: 10px;
    padding: 10px;
    text-align: center;
`
export const Th = styled.th`
    padding: 15px;
`
export const Tr = styled.tr``
export const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`


