import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { APP_PATH } from '../Common/Path';
import Loader from '../Common/Loader';


export default function AppNavigation() {
    const {repository} = APP_PATH;
    const RepoPage = lazy(() => import('../Pages/Repository'))

    return(
        <Router>
            <Suspense fallback = {<Loader />}>
                <Routes>
                    <Route path='*' element = {<Navigate to={repository} replace />} />
                    <Route path={repository} element = {<RepoPage />} />
                </Routes>
            </Suspense>
        </Router>
    )
}