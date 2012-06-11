// SERVER-4615:  Ensure hostInfo() command returns expected results on each platform

assert.commandWorked( db.hostInfo() );
var hostinfo = db.hostInfo();

// test for os-specific fields
if (hostinfo.os.type == "Windows") {
    assert.neq( hostinfo.os.name, "" || null, "Missing Windows os name" );
    assert.neq( hostinfo.os.version, "" || null, "Missing Windows version" );

} else if (hostinfo.os.type == "Linux") {
    assert.neq( hostinfo.os.name, "" || null, "Missing Linux os/distro name" );
    assert.neq( hostinfo.os.version, "" || null, "Missing Lindows version" );

} else if (hostinfo.os.type == "Darwin") {
    assert.neq( hostinfo.os.name, "" || null, "Missing Darwin os name" );
    assert.neq( hostinfo.os.version, "" || null, "Missing Darwin version" );
} else if (hostinfo.os.type == "BSD") {
    assert.neq( hostinfo.os.name, "" || null, "Missing BSD os name" );
    assert.neq( hostinfo.os.version, "" || null, "Missing BSD version" );
}
