import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource, changeHTTP } from '../../utils/network';
import { API_PEOPLE } from '../../components/constants/swapi';
import { getPeopleId,getPeopleImage,getPeoplePageId } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation'
import { useQueryParams } from '../../hooks/useQueryParams';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {       
                    id,
                    name,
                    img
                }
            })
            
            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE+queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);