export function commentTypeFilter(value) {
    switch (+value) {
        case 0:
            return '审核中';
        case 1:
            return '审核通过';
        case 2:
            return '审核未通过';
        default:
            return '-';
    }
}
