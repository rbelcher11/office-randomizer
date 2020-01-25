import React from 'react';
import {create} from 'react-test-renderer';

describe('App', () => {

    it('should render correctly', () => {

        const tree = create(
            <App />
        ).toJson();

        expect(tree).toMatchSnapshot();

    });

});
