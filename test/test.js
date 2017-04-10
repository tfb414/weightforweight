describe('orderWeight', function () {
    it('if "100 99" are passed into turnStringIntoArray return "100, 99"', function () {
        expect(turnStringIntoArray("100 99", " ")).toEqual(["100", "99"]);
    });
    it('if ["100"] is passed into sumOfDigitsInANumber return 1', function () {
        expect(sumOfDigitsInANumber("100")).toEqual(1);
    });
    it('if ["786754"] are passed into sumOfDigitsInANumber return 37', function () {
        expect(sumOfDigitsInANumber("786754")).toEqual(37);
    });
    it('if "[ [ 1, \'100\' ], [ 17, \'98\' ], [ 15, \'96\' ], [ 6, \'42\' ] ]" is passted into sortTheArrayAndRemoveSumInformation passed in return [ \'100\', \'42\', \'96\', \'98\' ]', function () {
        expect(sortTheArrayAndRemoveSumInformation([ [ 1, '100' ], [ 17, '98' ], [ 15, '96' ], [ 6, '42' ] ])).toEqual([ '100', '42', '96', '98' ]);
    });
    it('if "103 123 4444 99 2000" are passed into orderWeight return 2000 103 123 4444 99', function () {
        expect(orderWeight("103 123 4444 99 2000")).toEqual("2000 103 123 4444 99");
    });
    it('if "2000 10003 1234000 44444444 9999 11 11 22 123" are passed into orderWeight return 2000 103 123 4444 99', function () {
        expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toEqual("11 11 2000 10003 22 123 1234000 44444444 9999");
    });
    it('if "71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81" are passed into orderWeight return 1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703', function () {
        expect(orderWeight("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81")).toEqual("1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703");
    });

});

