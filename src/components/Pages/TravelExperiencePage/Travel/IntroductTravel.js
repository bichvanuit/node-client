import React from "react";
import styled from "styled-components";
import Divider from "../../../UI/Items/Divider";

const Wrapper = styled.div`
    margin-top: 20px;
`;

const IntroductTravel = () => {
    return (
        <Wrapper>
            <Divider>Giới thiệu về Nha Trang</Divider>
            <p>Nha Trang là một thành phố ven biển và là trung tâm chính trị, 
            kinh tế, văn hóa, khoa học kỹ thuật và du lịch của tỉnh Khánh Hòa. 
            Nha Trang được mệnh danh là hòn ngọc của biển Đông, 
            Viên ngọc xanh vì giá trị thiên nhiên, 
            sắc đẹp cũng như khí hậu của nó.</p>
        </Wrapper>
    );
};

export default IntroductTravel;