<script>
    (function() {
        let fixedRanges = [
            {
                original: 1700,
                from: 1380,
                to: 1340
            },
        ];

        function setScale(originalWidth, windowWidth) {
            let scale = 14 * (windowWidth / originalWidth);

            document["documentElement"]["style"].setProperty('font-size', scale +'px');
        }
        function clearScale() {
            document["documentElement"]["style"].removeProperty('font-size');
        }
        function iterateRanges(ranges) {
            let width = document["documentElement"]["clientWidth"] || document["body"]["clientWidth"];

            for (let i = 0, length = ranges.length; i < length; i++) {
                if (ranges[i].from === Infinity && width > ranges[i].to) {
                    setScale(ranges[i].to, width);
                } else {
                    if (width < ranges[i].from && width > ranges[i].to) {
                        setScale(ranges[i].original, width);
                    }
                }
            }
        }
        window.onresize = function(event) {
            clearScale();
            iterateRanges(fixedRanges);
        };
        iterateRanges(fixedRanges);
    }());
</script>
