

$(document).ready(function () {
    var weapons = [{
        "name": "pistol",
        "type": "SIDE ARM",
        "penetration": "LOW",
        "fire_rate": "6.75 RDS/SEC",
        "run_speed": "5.73 M/SEC",
        "equip_speed": "0.75 SEC",
        "spread": "0.4 DEG(HIP/ADS)",
        "reload_speed": "1.75 SEC",
        "magazine": "12 RDS"
    },
    {
        "name": "shorty",
        "type": "SIDE ARM",
        "penetration": "LOW",
        "fire_rate": "3.33 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "0.75 SEC",
        "spread": "4 DEG(HIP/ADS)",
        "reload_speed": "1.75 SEC",
        "magazine": "2 RDS"
    },
    {
        "name": "ghost",
        "type": "SIDE ARM",
        "penetration": "MEDIUM",
        "fire_rate": "6.75 RDS/SEC",
        "run_speed": "5.73 M/SEC",
        "equip_speed": "0.5 SEC",
        "spread": "0.3 DEG(HIP/ADS)",
        "reload_speed": "1.5 SEC",
        "magazine": "15 RDS"
    },
    {
        "name": "frenzy",
        "type": "SIDE ARM",
        "penetration": "LOW",
        "fire_rate": "3.33 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "0.75 SEC",
        "spread": "4 DEG(HIP/ADS)",
        "reload_speed": "1.75 SEC",
        "magazine": "2 RDS"
    }, {
        "name": "sheriff",
        "type": "SIDE ARM",
        "penetration": "HIGH",
        "fire_rate": "4 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "1 SEC",
        "spread": "0.25 DEG(HIP/ADS)",
        "reload_speed": "2.25 SEC",
        "magazine": "6 RDS"
    }, {
        "name": "stinger",
        "type": "SMG",
        "penetration": "LOW",
        "fire_rate": "16 RDS/SEC",
        "run_speed": "5.73 M/SEC",
        "equip_speed": "0.75 SEC",
        "spread": "0.65/0.5 DEG(HIP/ADS)",
        "reload_speed": "2.25 SEC",
        "magazine": "20 RDS"
    }, {
        "name": "spectre",
        "type": "SMG",
        "penetration": "LOW",
        "fire_rate": "13.33 RDS/SEC",
        "run_speed": "5.73 M/SEC",
        "equip_speed": "0.75 SEC",
        "spread": "0.4/0.25 DEG(HIP/ADS)",
        "reload_speed": "2.25 SEC",
        "magazine": "30 RDS"
    }, {
        "name": "bucky",
        "type": "SHOTGUN",
        "penetration": "LOW",
        "fire_rate": "1.1 RDS/SEC",
        "run_speed": "5.06 M/SEC",
        "equip_speed": "1 SEC",
        "spread": "2.6 DEG(HIP/ADS)",
        "reload_speed": "2.5 SEC",
        "magazine": "5 RDS"
    }, {
        "name": "judge",
        "type": "SHOTGUN",
        "penetration": "LOW",
        "fire_rate": "3.5 RDS/SEC",
        "run_speed": "5.06 M/SEC",
        "equip_speed": "1 SEC",
        "spread": "2.25 DEG(HIP/ADS)",
        "reload_speed": "2.2 SEC",
        "magazine": "7 RDS"
    }, {
        "name": "bulldog",
        "type": "RIFLE",
        "penetration": "MEDIUM",
        "fire_rate": "9.5 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "1 SEC",
        "spread": "0.3/0.3 DEG(HIP/ADS)",
        "reload_speed": "2.5 SEC",
        "magazine": "24 RDS"
    }, {
        "name": "guardian",
        "type": "RIFLE",
        "penetration": "HIGH",
        "fire_rate": "5.25 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "1 SEC",
        "spread": "0.1/0 DEG(HIP/ADS)",
        "reload_speed": "2.5 SEC",
        "magazine": "12 RDS"
    }, {
        "name": "phantom",
        "type": "RIFLE",
        "penetration": "MEDIUM",
        "fire_rate": "11 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "1 SEC",
        "spread": "0.2/0.11 DEG(HIP/ADS)",
        "reload_speed": "2.5 SEC",
        "magazine": "30 RDS"
    }, {
        "name": "vandal",
        "type": "RIFLE",
        "penetration": "MEDIUM",
        "fire_rate": "9.75 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "1 SEC",
        "spread": "0.25/0.157 DEG(HIP/ADS)",
        "reload_speed": "2.5 SEC",
        "magazine": "25 RDS"
    }, {
        "name": "marshal",
        "type": "SNIPER RIFLE",
        "penetration": "MEDIUM",
        "fire_rate": "1.5 RDS/SEC",
        "run_speed": "5.4 M/SEC",
        "equip_speed": "1.25 SEC",
        "spread": "1/0 DEG(HIP/ADS)",
        "reload_speed": "2.5 SEC",
        "magazine": "5 RDS"
    }, {
        "name": "operator",
        "type": "SNIPER RIFLE",
        "penetration": "HIGH",
        "fire_rate": "0.6 RDS/SEC",
        "run_speed": "5.13 M/SEC",
        "equip_speed": "1.5 SEC",
        "spread": "5/0 DEG(HIP/ADS)",
        "reload_speed": "3.7 SEC",
        "magazine": "5 RDS"
    }, {
        "name": "ares",
        "type": "MACHINE GUN",
        "penetration": "HIGH",
        "fire_rate": "10 RDS/SEC",
        "run_speed": "5.13 M/SEC",
        "equip_speed": "1.25 SEC",
        "spread": "0.8/0.67 DEG(HIP/ADS)",
        "reload_speed": "3.25 SEC",
        "magazine": "50 RDS"
    }, {
        "name": "odin",
        "type": "MACHINE GUN",
        "penetration": "HIGH",
        "fire_rate": "12 RDS/SEC",
        "run_speed": "5.13 M/SEC",
        "equip_speed": "1.25 SEC",
        "spread": "0.8/0.79 DEG(HIP/ADS)",
        "reload_speed": "5 SEC",
        "magazine": "100 RDS"
    }];

    $('.item-list a').on('click', function (e) {
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseenter', function (e) {
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for (item in weapons) {
            if (weapons[item].name == current_item) {
                console.log(weapons[item]);
                var container = $('.item-stats');
                container.find('.type').html(weapons[item].type);
                container.find('.penetration').html(weapons[item].penetration);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.run_speed').html(weapons[item].run_speed);
                container.find('.equip_speed').html(weapons[item].equip_speed);
                container.find('.spread').html(weapons[item].spread);
                container.find('.reload_speed').html(weapons[item].reload_speed);
                container.find('.magazine').html(weapons[item].magazine);

            }
        }
    });
})


$(document).ready(function () {
    var armors = [{
        "name": "lightarmor",
        "strength": 25,
        "creds": 400
    }, {
        "name": "heavyarmor",
        "strength": 50,
        "creds": 1000
    }];

    $('.item-list a').on('mouseenter', function (e) {
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);


        for (item in armors) {
            if (armors[item].name == current_item) {
                console.log(armors[item]);
                var container = $('.armor-stats');
                container.find('.strength').html(armors[item].strength);
                container.find('.creds').html(armors[item].creds);

            }
        }
    });

})