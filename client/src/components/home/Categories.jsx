import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    background-color: #f3e5f5; /* Light purple background color */
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #d733ff;
    color: black;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:hover {
        background: #be33ff;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #d733ff;
    transition: all 0.3s ease;

    &:hover {
        font-weight: bold;
        transform: scale(1.1);
    }
`;

const StyledTableCell = styled(TableCell)`
    padding: 16px;
    &:hover {
        background: rgba(100, 149, 237, 0.1);
    }
`;

const StyledTableRow = styled(TableRow)`
    &:nth-of-type(odd) {
        background-color: rgba(224, 224, 224, 0.5);
    }
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Have an Idea! Drop it here</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <StyledTableRow key={category.id}>
                                <StyledTableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;
