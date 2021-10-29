import { Loader, LoaderContainer } from './styles';

export function Loading() {
    return (
        <LoaderContainer>
            <Loader />
            <Loader />
        </LoaderContainer>
    )
}