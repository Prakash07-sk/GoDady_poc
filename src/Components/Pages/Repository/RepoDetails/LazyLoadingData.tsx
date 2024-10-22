import { Suspense, lazy, useCallback, useId } from 'react';
import { Card } from 'react-bootstrap';
import { List, AutoSizer, ListRowProps } from 'react-virtualized';
import ViewRepoData from './ViewRepoData';
import CardPlaceHolder from '../../../Common/CardPlacholder';
interface propsData {
    ListData: Array<any>;
}
export default function LazyLoadingComponent(props: propsData) {

    const { ListData } = props;
    const baseId = useId();


    const ViewRepoData = lazy(() => import('./ViewRepoData'));

    const RenderData = useCallback((propsData: ListRowProps) => {
        const { index } = propsData;
        const Value = ListData?.[index] ?? null
        console.log(Value)

        return (
            <Suspense key={index} fallback={<CardPlaceHolder />}>
                <ViewRepoData value={Value} />
            </Suspense>
        )

    }, [ListData]);
    return (
        <div className="list-comp" >
            {/* <AutoSizer>
                {({ height, width }: any) => (
                    <div>
                        <List
                            width={width}
                            height={height}
                            rowCount={ListData.length}
                            rowHeight={50}
                            rowRenderer={RenderData}

                        />

                    </div>
                )}
            </AutoSizer> */}

            {ListData?.map((value: any, index: number) => {

                return(
                    <Suspense key={`${baseId}-${index}`} fallback={<CardPlaceHolder />}>
                        <ViewRepoData value={value} />
                    </Suspense>
                )
            })}
        </div>
    );
}